import { Document } from 'mongoose';

export interface Data extends Document {
  readonly type: string;
  readonly title: string;
  readonly subtitle: string;
  readonly body: string;
  readonly icons: [
    {
      type: string;
    },
  ];
  readonly duration: string;
  readonly received: string;
}
