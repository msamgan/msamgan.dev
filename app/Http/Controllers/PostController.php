<?php

namespace App\Http\Controllers;

use App\Actions\Notification\NotifyUser;
use App\Actions\Post\CreatePost;
use App\Actions\Post\UpdatePost;
use App\Http\Requests\DeletePostRequest;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;
use App\Models\Tag;
use App\Notifications\PostCreated;
use App\Notifications\PostDeleted;
use App\Notifications\PostUpdated;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Post/Index');
    }

    /**
     * @throws Exception
     */
    public function store(StorePostRequest $request, CreatePost $createPost, NotifyUser $notifyUser): void
    {
        DB::beginTransaction();

        try {
            $post = $createPost->handle($request->validated());

            $notifyUser->handle(new PostCreated(auth()->user(), $post));

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function show(Post $post): Post
    {
        $post->content = json_decode($post->content_raw);
        $post->load('tags');

        return $post;
    }

    public function update(UpdatePostRequest $request, Post $post, UpdatePost $updatePost, NotifyUser $notifyUser): void
    {
        $post = $updatePost->handle($post, $request->validated());

        $notifyUser->handle(new PostUpdated(auth()->user(), $post));
    }

    public function destroy(DeletePostRequest $request, Post $post, NotifyUser $notifyUser): void
    {
        $notifyUser->handle(new PostDeleted(auth()->user(), $post));

        $post->delete();
    }

    public function posts(): Collection
    {
        return Post::query()
            ->with('tags')
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function last(): JsonResponse
    {
        $post = Post::query()
            ->with('tags')
            ->orderBy('created_at', 'desc')
            ->first();

        $post->content = json_decode($post->content_raw);

        return response()->json($post);
    }

    public function tagList(): Collection|array
    {
        return Tag::query()->withCount('posts')->get();
    }
}
