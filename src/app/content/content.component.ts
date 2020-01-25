import { Component, OnInit, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/user.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorIntl } from '@angular/material';

export interface User {
  name: string;
  email: string;
  phone: string;
  website: string;
  id: number;
  username: string;
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  };
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  };
}

/*export interface User {
  userId: string;
  id: string;
  title: string;
  completed: string;
}*/

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  dataSource: User[] = new Array(200);
  dataLength: number = this.dataSource.length;
  pageLength = 40;
  public tableDataSource: MatTableDataSource<any> = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'website'];
  // public displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  expandedElement: User | null;

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
    // if ((elem.innerHeight + elem.pageYOffset + 200) >= document.body.offsetHeight && this.pageLength <= this.dataLength) {
    if ((elem.scrollTop + 200) >= (elem.scrollHeight - 1900) && this.pageLength <= this.dataLength) {
      this.pageLength += 40;
      this.paginator._changePageSize(this.pageLength);
    }
  }

  applyFilter(filterValue: string) {
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
 }

}

/*export class TableFilter implements OnInit {

  constructor(private service: UserService) {}

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'website' ];
  expandedElement: User | null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource;

  ngOnInit() {
   this.service.getAll()
       .subscribe((users: User[]) => {
         this.dataSource = new MatTableDataSource(users);
         this.dataSource.sort = this.sort;
       });
  }

  applyFilter(filterValue: string) {
     this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}*/
