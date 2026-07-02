import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'candidateFilter'
})
export class CandidateFilterPipe implements PipeTransform {

   private datePipe = new DatePipe('en-US');

  transform(candidates: any[], searchText: string): any[] {

    if (!candidates || !searchText) {
      return candidates;
    }
searchText = searchText.toLowerCase().trim();

 return candidates.filter(candidate => {

      const formattedDate =
        this.datePipe.transform(candidate.dateEntered, 'dd-MM-yyyy') || '';
    return ( 
      candidate.applicationNo.toLowerCase().includes(searchText) ||
      candidate.applicantName.toLowerCase().includes(searchText) ||
        formattedDate.includes(searchText)
    );
  });
  }
}
