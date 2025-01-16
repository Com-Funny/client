import { AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";
import { makeObservable, observable } from "mobx";
import { UserDto } from "src/dto/user/user.dto";
import DefaultViewModel, {
  IDefaultProps,
} from "src/viewModels/default.viewModel";

export default class UserViewModel extends DefaultViewModel {
  public me: UserDto = new UserDto();
  public isLogin: boolean = false;

  constructor(props: IDefaultProps) {
    super(props);
    makeObservable(this, {
      me: observable,
    });
  }

  public async getMe() {
    // todo mockdata
    this.me = plainToInstance(UserDto, {
      id: 0,
      name: "MOCKDATA",
      email: "mock@mock.com",
      profile:
        "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/http%3A%2F%2Fplacekitten.com%2F250%2F250",
      phone: "010-2222-3333",
    });

    return;

    await this.api
      .get("/me")
      .then((response: AxiosResponse) => {
        this.me = plainToInstance(UserDto, response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
