import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, ObjectId, Column } from "typeorm"
import { v4 as uuid } from 'uuid';
@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number
}
