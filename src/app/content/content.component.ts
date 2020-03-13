import { Component, OnInit, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/user.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorIntl } from '@angular/material';
import {Sort} from '@angular/material/sort';



export interface User {
  _id: string;
  index: number;
  guid: string;
  age: number;
  eyeColor: string;
  name: {
    first: string,
    last: string
  };
  company: string;
  email: string;
  phone: string;
  address: string;
  registered: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  dataSource: User[] = new Array(2000);
  dataLength: number = this.dataSource.length;
  pageLength = 100;
  public tableDataSource: MatTableDataSource<any> = new MatTableDataSource();
  public displayedColumns: string[] = ['name', 'last name', 'email', 'phone', 'company'];

  expandedElement: User | null;
  factorial: number;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), this.ref);

  constructor(
    private ref: ChangeDetectorRef,
    private service: UserService
  ) {}

  ngOnInit() {
    this.service.getAll()
       .subscribe((users: User[]) => {
        this.dataSource = users;

        this.paginator.pageSize = this.pageLength;
        this.paginator.ngOnInit();
        this.tableDataSource.paginator = this.paginator;
        this.tableDataSource.sort = this.sort;
        this.tableDataSource.data = this.dataSource;
       });
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    const elem = event.currentTarget;
    // console.log(elem.scrollTop, elem.scrollHeight);
    if ((elem.scrollTop + 750 >= elem.scrollHeight) && (this.pageLength <= this.dataLength)) {
      this.pageLength += 100;
      this.paginator._changePageSize(this.pageLength);
    }
  }

  applyFilter(filterValue: string) {
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
 }


 sortData(sort: Sort) {
  const data = this.tableDataSource.data.slice();
  if (!sort.active || sort.direction === '') {
    this.tableDataSource.data = data;
    return;
  }

  this.tableDataSource.data = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'fname': return compare(a.name.first, b.name.first, isAsc);
      case 'lname': return compare(a.name.last, b.name.last, isAsc);
      case 'email': return compare(a.email, b.email, isAsc);
      case 'phone': return compare(a.phone, b.phone, isAsc);
      case 'company': return compare(a.company, b.company, isAsc);
      default: return 0;
    }
  });
}

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
