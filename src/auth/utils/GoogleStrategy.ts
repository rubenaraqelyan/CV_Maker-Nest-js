import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
const {BASE_API_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = process.env;

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `${BASE_API_URL}/auth/google/redirect`,
      scope: ['profile', 'email']
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log(111111,accessToken);
    console.log(222222,refreshToken);
    console.log(333333,profile);
    const user = await this.authService.validateUser({
      id: profile.id,
      email: profile.emails[0].value,
      name: profile.displayName,
      image: profile.photos[0].value
    });
    console.log('Validate');
    console.log(user);
    return user || null;
  }
}