import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExperiencesModule } from './experiences/experiences.module';

@Module({
  imports: [ExperiencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
