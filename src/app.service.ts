import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) { }

  async gitCommitsFront(): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get<any[]>('https://api.github.com/repos/tomy1005/fulltime-force-front/commits', { headers: { 'authorization': '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' } }).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!' + error;
        }),
      ),
    );
    return data;
  }

  async gitCommitsBack(): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get<any[]>('https://api.github.com/repos/tomy1005/fulltime-force-back/commits', { headers: { 'authorization': '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' } }).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!' + error;
        }),
      ),
    );
    return data;
  }
}
