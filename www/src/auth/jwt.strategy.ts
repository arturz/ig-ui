import { Strategy, ExtractJwt } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { jwtConstants } from './constants'
import { UsersService } from '../users/users.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService){
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret
    })
  }

  async validate(payload: any){
    const { sub: userId, username } = payload

    return await this.usersService.getUser({ userId, username })
  }
}