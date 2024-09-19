<?php

namespace App\Notifications;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Spatie\Permission\Models\Role;

class UserCreated extends Notification implements ShouldQueue
{
    use Queueable;

    private User $user;

    private User $newUser;

    private \Spatie\Permission\Contracts\Role|Role $role;

    /**
     * Create a new notification instance.
     */
    public function __construct(User $user, User $newUser, \Spatie\Permission\Contracts\Role|Role $role)
    {
        $this->user = $user;
        $this->newUser = $newUser;
        $this->role = $role;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->line('The introduction to the notification.')
            ->action('Notification Action', url('/'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'title' => 'New User Created',
            'message' => $this->newUser->name . ' has been created by ' . $this->user->name . ' with role ' . $this->role->display_name . ', On ' . now()->format('F j, Y, g:i a'),
        ];
    }
}
