<?php

namespace App\Notifications;

use App\Models\User;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Spatie\Permission\Models\Role;

class RoleDeleted extends Notification
{
    /**
     * Create a new notification instance.
     */
    public function __construct(private readonly User $user, private readonly \Spatie\Permission\Contracts\Role|Role $role) {}

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
            'title' => 'Role Deleted',
            'message' => $this->user->name . ' deleted the role "' . $this->role->display_name . '" on ' . now()->format('F j, Y, g:i a'),
        ];
    }
}
