import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('gta-vicecity')
  getVc(): object {
    return this.appService.getVc();
  }

  @Get('gta-3')
  getG3(): object {
    return this.appService.getG3();
  }

  @Get('gta-san-andreas')
  getSa(): object {
    return this.appService.getSa();
  }

  @Get('gta-4')
  getG4(): object {
    return this.appService.getG4();
  }

  @Get('gta-5')
  getG5(): object {
    return this.appService.getG5();
  } 

  @Get('resumo-gta-vicecity')
  getRsVc(): object {
    return this.appService.getRsVc();
  }

  @Get('resumo-gta-3')
  getRsG3(): object {
    return this.appService.getRsG3();
  }

  @Get('resumo-gta-san-andreas')
  getRsSa(): object {
    return this.appService.getRsSa();
  }

  @Get('resumo-gta-4')
  getRsG4(): object {
    return this.appService.getRsG4();
  }

  @Get('resumo-gta-5')
  getRsG5(): object {
    return this.appService.getRsG5();
  }
}
