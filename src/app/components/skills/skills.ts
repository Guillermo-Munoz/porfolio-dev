 import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of, Subscription, timer } from 'rxjs';
import { concatMap, delay, tap } from 'rxjs/operators'; 

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class Skills implements OnInit, OnDestroy {
  skills = [
    'Java / Spring Boot',
    'PHP / Laravel',
    'Angular',
    'API REST',
    'MySQL / PostgreSQL',
    'Git & GitHub'
  ];

  displayedSkills: string[] = [];
  isComplete = false;
  private subscription?: Subscription;
  private restartSub?: Subscription;

  ngOnInit() {
    this.startTyping();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe(); 
    this.restartSub?.unsubscribe();
  }

  startTyping() {
    this.displayedSkills = [];
    this.isComplete = false;

    const skills$ = of(...this.skills);

    this.subscription = skills$
      .pipe(
        concatMap((skill, index) =>
          this.typeSkill(skill, index).pipe(delay(500))
        )
      )
      .subscribe({
        complete: () => {
          this.isComplete = true;
          this.resetTime();
        }
      });
  }

  private typeSkill(skill: string, skillIndex: number) {
    const characters = skill.split('');
    
    return of(...characters).pipe(
      concatMap((char, charIndex) => 
        of(null).pipe(
          delay(20 * charIndex),
          tap(() => {
            const currentText = characters.slice(0, charIndex + 1).join('');
            this.displayedSkills[skillIndex] = currentText;
            this.displayedSkills = [...this.displayedSkills]; // for Angular change detection
          })
        )
      )
    );
  }

  private resetTime(): void {
    // Reinicia después de 10 segundos
    this.restartSub = timer(10000).subscribe(() => {
      this.startTyping();
    });
  }
}
