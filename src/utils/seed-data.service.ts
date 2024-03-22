import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Roles } from 'src/enums/roles.enum';
import { User } from 'src/user/entities/user.entity';
import { Article } from 'src/articles/entities/article.entity';
import { Academicyear } from 'src/academic-year/entities/academic-year.entity';

@Injectable()
export class SeedsService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
    @InjectRepository(Academicyear)
    private readonly acdemicRepository: Repository<Academicyear>,
  ) { }

  // async seedUsers() {
  //   const getRandomRole = (): Roles => {
  //     const rolesArray = Object.values(Roles);
  //     const randomIndex = Math.floor(Math.random() * rolesArray.length);
  //     return rolesArray[randomIndex] as Roles;
  //   };
  //   const users = [
  //     {
  //       firstName: 'John',
  //       lastName: 'Doe',
  //       email: 'john@example.com',
  //       password: '123456',
  //       role: getRandomRole(),
  //       status: 1,
  //     },
  //     {
  //       firstName: 'Jane',
  //       lastName: 'Smith',
  //       email: 'jane@example.com',
  //       password: '123456',
  //       role: getRandomRole(),
  //       status: 1,
  //     },
  //     {
  //       firstName: 'Bob',
  //       lastName: 'Johnson',
  //       email: 'bob@example.com',
  //       password: '123456',
  //       role: getRandomRole(),
  //       status: 1,
  //     },
  //     {
  //       firstName: 'Alice',
  //       lastName: 'Williams',
  //       email: 'alice@example.com',
  //       password: '123456',
  //       role: getRandomRole(),
  //       status: 1,
  //     },
  //     {
  //       firstName: 'Tom',
  //       lastName: 'Brown',
  //       email: 'tom@example.com',
  //       password: '123456',
  //       role: getRandomRole(),
  //       status: 1,
  //     },
  //     {
  //       firstName: 'Sarah',
  //       lastName: 'Davis',
  //       email: 'sarah@example.com',
  //       password: '123456',
  //       role: getRandomRole(),
  //       status: 1,
  //     },
  //     {
  //       firstName: 'Mike',
  //       lastName: 'Wilson',
  //       email: 'mike@example.com',
  //       password: '123456',
  //       role: getRandomRole(),
  //       status: 1,
  //     },
  //     {
  //       firstName: 'Emily',
  //       lastName: 'Anderson',
  //       email: 'emily@example.com',
  //       password: '123456',
  //       role: getRandomRole(),
  //       status: 1,
  //     },
  //     {
  //       firstName: 'David',
  //       lastName: 'Taylor',
  //       email: 'david@example.com',
  //       password: '123456',
  //       role: getRandomRole(),
  //       status: 1,
  //     },
  //   ];

  //   for (const user of users) {
  //     const newUser = this.userRepository.create(user);
  //     await this.userRepository.save(newUser);
  //   }
  // }

  // async seedArticles() {
  //   const articles = [
  //     {
  //       title: 'Article 1',
  //       content: 'Content for article 1',
  //       image: 'image1.jpg',
  //       file: 'file1.pdf',
  //       status: 'published',
  //       date: new Date('2023-03-01'),
  //     },
  //     {
  //       title: 'Article 2',
  //       content: 'Content for article 2',
  //       image: 'image2.jpg',
  //       file: 'file2.pdf',
  //       status: 'draft',
  //       date: new Date('2023-02-15'),
  //     },
  //     {
  //       title: 'Article 3',
  //       content: 'Content for article 3',
  //       image: 'image3.jpg',
  //       file: 'file3.pdf',
  //       status: 'published',
  //       date: new Date('2023-03-10'),
  //     },
  //     {
  //       title: 'Article 4',
  //       content: 'Content for article 4',
  //       image: 'image4.jpg',
  //       file: 'file4.pdf',
  //       status: 'draft',
  //       date: new Date('2023-02-20'),
  //     },
  //     {
  //       title: 'Article 5',
  //       content: 'Content for article 5',
  //       image: 'image5.jpg',
  //       file: 'file5.pdf',
  //       status: 'published',
  //       date: new Date('2023-03-05'),
  //     },
  //     {
  //       title: 'Article 6',
  //       content: 'Content for article 6',
  //       image: 'image6.jpg',
  //       file: 'file6.pdf',
  //       status: 'draft',
  //       date: new Date('2023-02-25'),
  //     },
  //     {
  //       title: 'Article 7',
  //       content: 'Content for article 7',
  //       image: 'image7.jpg',
  //       file: 'file7.pdf',
  //       status: 'published',
  //       date: new Date('2023-03-15'),
  //     },
  //     {
  //       title: 'Article 8',
  //       content: 'Content for article 8',
  //       image: 'image8.jpg',
  //       file: 'file8.pdf',
  //       status: 'draft',
  //       date: new Date('2023-03-01'),
  //     },
  //     {
  //       title: 'Article 9',
  //       content: 'Content for article 9',
  //       image: 'image9.jpg',
  //       file: 'file9.pdf',
  //       status: 'published',
  //       date: new Date('2023-03-10'),
  //     },
  //     {
  //       title: 'Article 10',
  //       content: 'Content for article 10',
  //       image: 'image10.jpg',
  //       file: 'file10.pdf',
  //       status: 'draft',
  //       date: new Date('2023-02-18'),
  //     },
  //   ];

  //   const users = await this.userRepository.find();

  //   for (const article of articles) {
  //     const user = users[Math.floor(Math.random() * users.length)];
  //     const newArticle = this.articleRepository.create({ ...article, user });
  //     await this.articleRepository.save(newArticle);
  //   }
  // }

  // async seedAcademicYear() {
  //   const academicyears = [
  //     {
  //       id: 1,
  //       name: "Spring 2023",
  //       openDate: new Date('2023-01-03'),
  //       closeDate: new Date('2023-05-05'),

  //     },
  //     {
  //       id: 2,
  //       name: "Summer 2023",
  //       openDate: new Date('2023-08-12'),
  //       closeDate: new Date('2023-11-21'),

  //     },
  //     {
  //       id: 3,
  //       name: "Fall 2023",
  //       openDate: new Date('2023-10-26'),
  //       closeDate: new Date('2024-01-06'),

  //     },
  //     {
  //       id: 4,
  //       name: "Spring 2024",
  //       openDate: new Date('2023-02-18'),
  //       closeDate: new Date('2023-02-25'),

  //     },
  //   ];
  //   for (const academicyear of academicyears) {
  //     const newAcdemicyear = this.acdemicRepository.create(academicyear);
  //     await this.acdemicRepository.save(newAcdemicyear);
  //   }
  // }

  async seed() {
    // await this.seedUsers();
    // await this.seedArticles();
    // await this.seedAcademicYear();
  }
}
