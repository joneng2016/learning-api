import { HttpException, HttpStatus } from '@nestjs/common';

export default function authJwt(inputArguments: any) {
  const { jwtService, userService, authorization } = inputArguments;

  let user = jwtService.verify(authorization);

  user = userService.findOne({
    where: {
      email: user.email,
      password: user.password,
    },
  });

  if (!user) {
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  return user;
}
