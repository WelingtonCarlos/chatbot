import { Component } from '@angular/core';
import { LogoMinorComponent } from '../../icons/logo-minor/logo-minor.component';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';
import { CommonModule } from '@angular/common';
import { Message } from '../../types/message.type';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    ChatDialogComponent,
    LogoMinorComponent,
    ArrowLeftComponent,
    ChatSuggestionsComponent,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  messages: Message[] = [];

  sendSuggestedQuestion(question: string) {
    this.messages.push({
      type: 'request',
      message: question,
    });
  }
}
