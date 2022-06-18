import { HttpService } from '@nestjs/axios';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  constructor(private httpService: HttpService) {}

  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = exception.getStatus();

    // 대부분의 예외는 이미 nest에서 httpException을 상속받는 클래스로 제공
    // 여기서 HttpException이 아닌 예외는 알 수 없는 에러 InternalServerErrorException로 처리하기
    if (!(exception instanceof HttpException)) {
      exception = new InternalServerErrorException();
    }

    // production에서만 에러 내용을 슬랙에 로깅함
    // if (process.env.NODE_ENV === 'production' && request.url.match('v1')) {
    //   this.httpService
    //     .post(process.env.SLACK_WEBHOOK, {
    //       text: `
    //       🚨 *사용자 오류 발생* 🚨
    //         *✔️ 에러 명:* ${exception.name}
    //         *✔️ 메세지:* ${exception.message}
    //         *✔️ URL:* ${request.url}
    //         *✔️ user-agent:* ${request.headers['user-agent']}
    //         *✔️ host:* ${request.headers.host}
    //       `,
    //     })
    //     .subscribe();
    // }

    const log = {
      timestamp: new Date(),
      url: request.url,
      response,
    };

    console.log(log);

    response.status(200).json({
      statusCode,
      message: exception.message,
    });
  }
}
