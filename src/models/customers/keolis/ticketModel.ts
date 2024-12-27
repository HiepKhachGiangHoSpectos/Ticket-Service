import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Ticket {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    title: string;
}
