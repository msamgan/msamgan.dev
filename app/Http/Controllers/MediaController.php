<?php

namespace App\Http\Controllers;

use App\Actions\Notification\NotifyUser;
use App\Http\Requests\DeleteMediaRequest;
use App\Http\Requests\StoreMediaRequest;
use App\Notifications\MediaCreated;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class MediaController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Media/Index');
    }

    /**
     * @throws Exception
     * @throws Throwable
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

    public function destroy(DeleteMediaRequest $request): void
    {
        $filename = $request->get('name');

        throw_unless($filename, new Exception('File name is required for deletion.'));

        $filePath = 'images/' . $filename;
        throw_unless(Storage::disk('public')->exists($filePath), new Exception('File not found.'));

        Storage::disk('public')->delete($filePath);
    }

    public function media(): Collection
    {
        $files = collect(Storage::disk('public')->files('images'));

        return $files->map(function ($file): array {
            $fileUrl = url('storage/images/' . basename($file));

            return [
                'url' => $fileUrl,
                'name' => basename($file),
            ];
        });
    }
}
