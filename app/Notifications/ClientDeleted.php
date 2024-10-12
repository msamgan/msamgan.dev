<?php

namespace App\Notifications;

use App\Models\Client;
use App\Models\User;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ClientDeleted extends Notification // implements ShouldQueue
{
    // use Queueable;

    private User $user;

    private Client $client;

    /**
     * Create a new notification instance.
     */
    public function __construct(User $user, Client $client)
    {
        $this->user = $user;
        $this->client = $client;
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
        $timestamp = now()->format('F j, Y, g:i a');

        return [
            'title' => 'Client Deleted',
            'message' => "Client {$this->client->name} was deleted by {$this->user->name} on {$timestamp}.",
        ];
    }
}
