import { Component } from '@angular/core';
import { LogoMinorComponent } from '../../icons/logo-minor/logo-minor.component';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [LogoMinorComponent, ArrowLeftComponent, ChatSuggestionsComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {}
