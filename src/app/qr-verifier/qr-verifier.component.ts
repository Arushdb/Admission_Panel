import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../service/web-service.service';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

interface Program {
  programId: string;
  programName: string;
}

interface Student {
  rollNo: string;
  name: string;
  programId: string;
  photoPath?: string;
  signaturePath?: string;
  studentId?: string;
}

@Component({
  selector: 'app-qr-verifier',
  templateUrl: './qr-verifier.component.html',
  styleUrls: ['./qr-verifier.component.css']
})
export class QrVerifierComponent implements OnInit {

  programList: Program[] = [];
  selectedProgram: string = '';
  qrResult: string = '';
  scannerEnabled = false;
  loading = false;
  studentData?: Student;

  availableDevices: MediaDeviceInfo[] = [];
  currentDevice?: MediaDeviceInfo;

  constructor(private webService: WebServiceService) { }

  ngOnInit(): void {
    this.loadPrograms();
  }

  loadPrograms(): void {
    this.loading = true;
    this.webService.getPrograms().subscribe(
      (res: any) => {
        this.programList = res && res.data
          ? res.data.map((p: any) => ({
              programId: p.program_id || p.programId,
              programName: p.program_name || p.programName
            }))
          : [];
        this.loading = false;
      },
      err => {
        console.error('Failed to load programs', err);
        this.loading = false;
      }
    );
  }

  toggleScanner() {
  if (!this.currentDevice && this.availableDevices.length > 0) {
    this.currentDevice = this.availableDevices[0];
  }
  this.scannerEnabled = !this.scannerEnabled;
}

onCamerasFound(devices: MediaDeviceInfo[]) {
  this.availableDevices = devices;
  if (devices.length && !this.currentDevice) {
    this.currentDevice = devices[0];
  }
}

  handleQrCodeResult(result: string): void {
    this.qrResult = result;
    console.log('QR scanned:', result);

    if (!this.selectedProgram) {
      console.warn('Select a program first');
      return;
    }

    this.fetchStudentInfo(result);
  }

  private fetchStudentInfo(applicationNumber: string): void {
    this.loading = true;
    this.webService.getStudentInfo(applicationNumber).subscribe(
      (res: any) => {
        if (res && res.exists) {
          this.studentData = res.student as Student;
        } else {
          this.studentData = undefined;
          console.warn('Student not found');
        }
        this.loading = false;
      },
      err => {
        console.error('Failed to fetch student info', err);
        this.loading = false;
      }
    );
  }

  getStudentData(event: Student): void {
    this.studentData = event;
  }
}
