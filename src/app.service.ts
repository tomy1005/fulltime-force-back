import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) { }

  async gitHistory(): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get<any[]>('https://api.github.com/repos/tomy1005/fulltime-force-front/commits', { headers: { 'auth': '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' } }).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
