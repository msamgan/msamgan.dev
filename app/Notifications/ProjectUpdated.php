<?php

namespace App\Notifications;

use App\Models\Project;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ProjectUpdated extends Notification // implements ShouldQueue
{
    /**
     * Create a new notification instance.
     */
    public function __construct(private readonly User $user, private readonly Project $project) {}

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
        $timestamp = now()->format('F j, Y, g:i a');

        return [
            'title' => 'Project Updated',
            'message' => "Project {$this->project->name} was updated by {$this->user->name} on {$timestamp}",
        ];
    }
}
