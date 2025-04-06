import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    next();
  }
}

export function loggerGlobal(
  req: Request,
  res: Response,
  next: () => void
) {
  console.log(`Se ejecuto el controlador conel metodo ${req.method} en la ruta ${req.url}, a la hora de ${new Date().getHours()} : ${new Date().getMinutes()}`),
    next();
}