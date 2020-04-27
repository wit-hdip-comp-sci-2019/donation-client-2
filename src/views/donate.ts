import { inject } from 'aurelia-framework';
import { Candidate, Donation } from '../services/donation-types';
import { DonationService } from '../services/donation-service';

@inject(DonationService)
export class Donate {
  donations: Donation[];
  paymentMethods: string[];
  candidates: Candidate[];

  constructor(private ds: DonationService) {
    this.candidates = ds.candidates;
    this.donations = ds.donations;
    this.paymentMethods = ds.paymentMethods;
  }
}
