import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QuestionComponent } from '../../icons/question/question.component';
import { CuriosityComponent } from '../../icons/curiosity/curiosity.component';

@Component({
  selector: 'chat-suggestions',
  standalone: true,
  imports: [CommonModule, QuestionComponent, CuriosityComponent],
  templateUrl: './chat-suggestions.component.html',
  styleUrl: './chat-suggestions.component.scss',
})
export class ChatSuggestionsComponent {
  suggestionTopics = [
    {
      title: 'Perguntas Frequentes',
      icon: 'frequentily',
      questions: [
        'Quais são as soluções de pagamento disponíveis?',
        'Quais são os diferenciais?',
      ]
    },
    {
      title: 'Quero ser um colaborador',
      icon: 'curiosity',
      questions: [
        'Como eu posso entrar em contato?',
        'Como faço pra ser um parceiro MR Pay?',
      ]
    }
  ];
}
