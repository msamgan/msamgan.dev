<?php

namespace App\Http\Controllers;

use App\Actions\Notification\NotifyUser;
use App\Http\Requests\StoreMediaRequest;
use App\Notifications\MediaCreated;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class MediaController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Media/Index');
    }

    /**
     * @throws Exception
     */
    public function store(StoreMediaRequest $request, NotifyUser $notifyUser): void
    {
        DB::beginTransaction();

        try {
            $file = $request->file('files');
            $file->store('images', 'public');

            $notifyUser->handle(new MediaCreated(request()->user()));

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /*public function destroy(DeleteMediaRequest $request, Media $media, NotifyUser $notifyUser): void
    {
        $notifyUser->handle(new MediaDeleted(request()->user()));

        $media->delete();
    }*/

    public function media(): Collection
    {
        $files = collect(Storage::disk('public')->files('images'));

        return $files->map(function ($file) {
            $fileUrl = url('storage/images/' . basename($file));

            return [
                'url' => $fileUrl,
                'name' => basename($file),
            ];
        });
    }
}
