import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("userspasswordtokens")
class UserPasswordToken {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  passwordToken: string;

  @Column()
  expiration: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
export { UserPasswordToken };
