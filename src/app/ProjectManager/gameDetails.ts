import { Game } from "../../models/game"
export class GameDetails {
  Games: Game[] = [];

  constructor() {
    this.Games = [
      new Game(
        "RELIC ROGUE: QUEST FOR THE ANCIENTS - 2024",
        "Triumphed at the IEEE ENSI SB GameCraft Game Jam, securing first place. This thrilling game features an innovative AI-powered final boss, dynamically adapting to players' strategies for an unpredictable gaming experience.",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-5b93c.appspot.com/o/GAMES%2Ftitle.png?alt=media&token=9fd55e98-62fd-4a7c-b658-5921c9fc4841",
        "https://github.com/MiroJlassi/GameCraft-Project-CodeSource"
      ),
      new Game(
        "Silicon Spectra: IEEE ENSI Edition 2023",
        "Dive into the world of technology in this thrilling Third Person game created for the TSYP11 event - Silicon Spectra IEEE ENSI Edition. Uncover the secrets of Google, Meta, Microsoft, and more as you search for keys to progress through each giant tech company.",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-5b93c.appspot.com/o/GAMES%2FGamee.jpg?alt=media&token=4c230cf7-26c9-4563-95b9-d2b726c4148a",
        "https://mirojlassi.itch.io/silicon-spectra"
      ),
      new Game(
        "WIND! - 2022",
        "Follows the journey of Miro, a determined little kid who dreams of reaching the mountaintop near his home, despite his mother's objections. In this charming 30-minute game, players accompany Miro as he embarks on his adventure, using a paper plane to soar to new heights. Explore breathtaking views and immerse yourself in a delightful game world designed for pure enjoyment.",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-5b93c.appspot.com/o/GAMES%2Fwind!.png?alt=media&token=a4943305-c611-48df-a2fa-2e3e632a7198",
        "https://www.youtube.com/watch?v=893SDp0T_Xs"
      ),
      new Game(
        "THEA! - 2022",
        "Living in this way, passively, disturbed her. “Why do we look like this? Why am I so heavy? I really want to know more.” Inquired THEA protagonist, as she’s starting her journey to unravel the mysteries of her identity. You are going to help THEA in her adventure, investigate, explore, and solve puzzles, in an intriguing 2D interactive narrative experience.",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-5b93c.appspot.com/o/GAMES%2FCOVER.png?alt=media&token=b22c0b6a-0d19-46e4-a63c-064f4ad7f8cf",
        "https://www.youtube.com/watch?v=m37biuyAlA0"
      ),
      new Game(
        "ESCAPE CIRCLES - 2020",
        "Thrilling arcade game where players navigate through rotating circles. Challenge your friends and strive to reach the top of the charts! Within its first 24 hours, it soared to the top 3 arcade games on the Play Store. Ready to test your skills and escape the circles? Download now!",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-5b93c.appspot.com/o/GAMES%2FMIuCnw.png?alt=media&token=5fd5d6e5-95f6-42a0-8b05-85701c7dd411",
        "https://mirojlassi.itch.io/escape-circles"
      ),
      new Game(
        "BALLS & HOLES - 2020",
        "Dive into the challenge of guiding your ball to the hole while dodging obstacles. Created for the Brackeys Game Jam in March 2020, this game tests your precision and reflexes. Can you navigate the maze and conquer each level? Try now and put your skills to the test!",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-5b93c.appspot.com/o/GAMES%2FPse0tg.png?alt=media&token=bd63dbb5-c20a-456c-8a18-ec3a9608a50c",
        "https://mirojlassi.itch.io/ballsholes"
      )
    ];
  }
}

