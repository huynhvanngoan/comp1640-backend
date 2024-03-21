import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Roles } from 'src/enums/roles.enum';
import { User } from 'src/user/entities/user.entity';
import { Article } from 'src/articles/entities/article.entity';

@Injectable()
export class SeedsService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async seedUsers() {
    const getRandomRole = (): Roles => {
      const rolesArray = Object.values(Roles);
      const randomIndex = Math.floor(Math.random() * rolesArray.length);
      return rolesArray[randomIndex] as Roles;
    };
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        email: 'bob@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Alice',
        lastName: 'Williams',
        email: 'alice@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Tom',
        lastName: 'Brown',
        email: 'tom@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Sarah',
        lastName: 'Davis',
        email: 'sarah@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Mike',
        lastName: 'Wilson',
        email: 'mike@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Emily',
        lastName: 'Anderson',
        email: 'emily@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'David',
        lastName: 'Taylor',
        email: 'david@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Jessica',
        lastName: 'Thomas',
        email: 'jessica@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Chris',
        lastName: 'Moore',
        email: 'chris@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Olivia',
        lastName: 'Martin',
        email: 'olivia@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Matthew',
        lastName: 'Jackson',
        email: 'matthew@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Sophia',
        lastName: 'Thompson',
        email: 'sophia@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Andrew',
        lastName: 'White',
        email: 'andrew@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Emma',
        lastName: 'Harris',
        email: 'emma@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Daniel',
        lastName: 'Garcia',
        email: 'daniel@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Ava',
        lastName: 'Martinez',
        email: 'ava@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Joseph',
        lastName: 'Robinson',
        email: 'joseph@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
      {
        firstName: 'Mia',
        lastName: 'Clark',
        email: 'mia@example.com',
        password: '123456',
        role: getRandomRole(),
        status: 1,
      },
    ];

    for (const user of users) {
      const newUser = this.userRepository.create(user);
      await this.userRepository.save(newUser);
    }
  }

  async seedArticles() {
    const articles = [
      {
        title: 'Article 1',
        content: 'Content for article 1',
        image: 'image1.jpg',
        file: 'file1.pdf',
        status: 'published',
        date: new Date('2023-03-01'),
      },
      {
        title: 'Article 2',
        content: 'Content for article 2',
        image: 'image2.jpg',
        file: 'file2.pdf',
        status: 'draft',
        date: new Date('2023-02-15'),
      },
      {
        title: 'Article 3',
        content: 'Content for article 3',
        image: 'image3.jpg',
        file: 'file3.pdf',
        status: 'published',
        date: new Date('2023-03-10'),
      },
      {
        title: 'Article 4',
        content: 'Content for article 4',
        image: 'image4.jpg',
        file: 'file4.pdf',
        status: 'draft',
        date: new Date('2023-02-20'),
      },
      {
        title: 'Article 5',
        content: 'Content for article 5',
        image: 'image5.jpg',
        file: 'file5.pdf',
        status: 'published',
        date: new Date('2023-03-05'),
      },
      {
        title: 'Article 6',
        content: 'Content for article 6',
        image: 'image6.jpg',
        file: 'file6.pdf',
        status: 'draft',
        date: new Date('2023-02-25'),
      },
      {
        title: 'Article 7',
        content: 'Content for article 7',
        image: 'image7.jpg',
        file: 'file7.pdf',
        status: 'published',
        date: new Date('2023-03-15'),
      },
      {
        title: 'Article 8',
        content: 'Content for article 8',
        image: 'image8.jpg',
        file: 'file8.pdf',
        status: 'draft',
        date: new Date('2023-03-01'),
      },
      {
        title: 'Article 9',
        content: 'Content for article 9',
        image: 'image9.jpg',
        file: 'file9.pdf',
        status: 'published',
        date: new Date('2023-03-10'),
      },
      {
        title: 'Article 10',
        content: 'Content for article 10',
        image: 'image10.jpg',
        file: 'file10.pdf',
        status: 'draft',
        date: new Date('2023-02-18'),
      },
      {
        title: 'Article 11',
        content: 'Content for article 11',
        image: 'image11.jpg',
        file: 'file11.pdf',
        status: 'published',
        date: new Date('2023-03-07'),
      },
      {
        title: 'Article 12',
        content: 'Content for article 12',
        image: 'image12.jpg',
        file: 'file12.pdf',
        status: 'draft',
        date: new Date('2023-02-22'),
      },
      {
        title: 'Article 13',
        content: 'Content for article 13',
        image: 'image13.jpg',
        file: 'file13.pdf',
        status: 'published',
        date: new Date('2023-03-12'),
      },
      {
        title: 'Article 14',
        content: 'Content for article 14',
        image: 'image14.jpg',
        file: 'file14.pdf',
        status: 'draft',
        date: new Date('2023-02-28'),
      },
      {
        title: 'Article 15',
        content: 'Content for article 15',
        image: 'image15.jpg',
        file: 'file15.pdf',
        status: 'published',
        date: new Date('2023-03-03'),
      },
      {
        title: 'Article 16',
        content: 'Content for article 16',
        image: 'image16.jpg',
        file: 'file16.pdf',
        status: 'draft',
        date: new Date('2023-03-05'),
      },
      {
        title: 'Article 17',
        content: 'Content for article 17',
        image: 'image17.jpg',
        file: 'file17.pdf',
        status: 'published',
        date: new Date('2023-03-09'),
      },
      {
        title: 'Article 18',
        content: 'Content for article 18',
        image: 'image18.jpg',
        file: 'file18.pdf',
        status: 'draft',
        date: new Date('2023-02-27'),
      },
      {
        title: 'Article 19',
        content: 'Content for article 19',
        image: 'image19.jpg',
        file: 'file19.pdf',
        status: 'published',
        date: new Date('2023-03-14'),
      },
      {
        title: 'Article 20',
        content: 'Content for article 20',
        image: 'image20.jpg',
        file: 'file20.pdf',
        status: 'draft',
        date: new Date('2023-03-02'),
      },
      {
        title: 'Article 21',
        content: 'Content for article 21',
        image: 'image21.jpg',
        file: 'file21.pdf',
        status: 'published',
        date: new Date('2023-03-08'),
      },
      {
        title: 'Article 22',
        content: 'Content for article 22',
        image: 'image22.jpg',
        file: 'file22.pdf',
        status: 'draft',
        date: new Date('2023-02-24'),
      },
      {
        title: 'Article 23',
        content: 'Content for article 23',
        image: 'image23.jpg',
        file: 'file23.pdf',
        status: 'published',
        date: new Date('2023-03-13'),
      },
      {
        title: 'Article 24',
        content: 'Content for article 24',
        image: 'image24.jpg',
        file: 'file24.pdf',
        status: 'draft',
        date: new Date('2023-02-26'),
      },
      {
        title: 'Article 25',
        content: 'Content for article 25',
        image: 'image25.jpg',
        file: 'file25.pdf',
        status: 'published',
        date: new Date('2023-03-06'),
      },
      {
        title: 'Article 26',
        content: 'Content for article 26',
        image: 'image26.jpg',
        file: 'file26.pdf',
        status: 'draft',
        date: new Date('2023-03-04'),
      },
      {
        title: 'Article 27',
        content: 'Content for article 27',
        image: 'image27.jpg',
        file: 'file27.pdf',
        status: 'published',
        date: new Date('2023-03-11'),
      },
      {
        title: 'Article 28',
        content: 'Content for article 28',
        image: 'image28.jpg',
        file: 'file28.pdf',
        status: 'draft',
        date: new Date('2023-02-23'),
      },
      {
        title: 'Article 29',
        content: 'Content for article 29',
        image: 'image29.jpg',
        file: 'file29.pdf',
        status: 'published',
        date: new Date('2023-03-16'),
      },
      {
        title: 'Article 30',
        content: 'Content for article 30',
        image: 'image30.jpg',
        file: 'file30.pdf',
        status: 'draft',
        date: new Date('2023-02-19'),
      },
      {
        title: 'Article 31',
        content: 'Content for article 31',
        image: 'image31.jpg',
        file: 'file31.pdf',
        status: 'published',
        date: new Date('2023-03-02'),
      },
      {
        title: 'Article 32',
        content: 'Content for article 32',
        image: 'image32.jpg',
        file: 'file32.pdf',
        status: 'draft',
        date: new Date('2023-03-07'),
      },
      {
        title: 'Article 33',
        content: 'Content for article 33',
        image: 'image33.jpg',
        file: 'file33.pdf',
        status: 'published',
        date: new Date('2023-03-12'),
      },
      {
        title: 'Article 34',
        content: 'Content for article 34',
        image: 'image34.jpg',
        file: 'file34.pdf',
        status: 'draft',
        date: new Date('2023-02-21'),
      },
      {
        title: 'Article 35',
        content: 'Content for article 35',
        image: 'image35.jpg',
        file: 'file35.pdf',
        status: 'published',
        date: new Date('2023-03-04'),
      },
      {
        title: 'Article 36',
        content: 'Content for article 36',
        image: 'image36.jpg',
        file: 'file36.pdf',
        status: 'draft',
        date: new Date('2023-03-09'),
      },
      {
        title: 'Article 37',
        content: 'Content for article 37',
        image: 'image37.jpg',
        file: 'file37.pdf',
        status: 'published',
        date: new Date('2023-03-14'),
      },
      {
        title: 'Article 38',
        content: 'Content for article 38',
        image: 'image38.jpg',
        file: 'file38.pdf',
        status: 'draft',
        date: new Date('2023-02-28'),
      },
      {
        title: 'Article 39',
        content: 'Content for article 39',
        image: 'image39.jpg',
        file: 'file39.pdf',
        status: 'published',
        date: new Date('2023-03-03'),
      },
      {
        title: 'Article 40',
        content: 'Content for article 40',
        image: 'image40.jpg',
        file: 'file40.pdf',
        status: 'draft',
        date: new Date('2023-03-08'),
      },
    ];

    const users = await this.userRepository.find();

    for (const article of articles) {
      const user = users[Math.floor(Math.random() * users.length)];
      const newArticle = this.articleRepository.create({ ...article, user });
      await this.articleRepository.save(newArticle);
    }
  }

  async seed() {
    await this.seedUsers();
    await this.seedArticles();
  }
}
