import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheet, ActionSheetController, ModalController, } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavParams } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';
import { DetalheFiltroPage } from '../detalhe-filtro/detalhe-filtro';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public feeds: Array<string>;
  private olderPosts: string = "https://www.reddit.com/new.json?after=";
  private newerPosts: string = "https://www.reddit.com/new.json?before=";
  private url: string = "https://www.reddit.com/new.json";
  public noFilter: Array<any>;
  public hasFilter: boolean = false;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
  ) {

    this.fetchContent();

  }

  functionmodal(conteudo) {
    console.log(conteudo);
    let profileModal = this.modalCtrl.create(DetalhePage,{conteudo:123});
    profileModal.present();
  }
  functionfiltro(miolo) {
    console.log(miolo);
    let profileModal = this.modalCtrl.create(DetalheFiltroPage,{miolo:124});
    profileModal.present();
    
  }

  itemSelected(parament) {


  }

  fetchContent(): void {
    let loading = this.loadingCtrl.create({
      content: 'Fetching content...'
    });

    loading.present();

    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {


        this.feeds = data.data.children;

        this.noFilter = this.feeds;
        loading.dismiss();
      });
  }
  doInfinite(infiniteScroll) {

    let paramsUrl = (this.feeds.length > 0) ? this.feeds[this.feeds.length - 1].data.name : "";

    this.http.get(this.olderPosts + paramsUrl).map(res => res.json())
      .subscribe(data => {

        this.feeds = this.feeds.concat(data.data.children);

        this.feeds.forEach((e, i, a) => {
          if (!e.data.thumbnail || e.data.thumbnail.indexOf('b.thumbs.redditmedia.com') === -1) {
            e.data.thumbnail = 'https://www.redditstatic.com/icon.png';
          }
        })
        infiniteScroll.complete();
      });
  }
  doRefresh(refresher) {

    let paramsUrl = this.feeds[0].data.name;

    this.http.get(this.newerPosts + paramsUrl).map(res => res.json())
      .subscribe(data => {

        this.feeds = data.data.children.concat(this.feeds);
        this.noFilter = this.feeds;
        this.feeds.forEach((e, i, a) => {
          if (!e.data.thumbnail || e.data.thumbnail.indexOf('b.thumbs.redditmedia.com') === -1) {
            e.data.thumbnail = 'https://www.redditstatic.com/icon.png';
          }
        })
        refresher.complete();
      });
  }

  itemSelecte(url: string): void {
    let browser = new InAppBrowser(url, '_system');
  }

  showFilters(): void {

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Filter options:',
      buttons: [
        {
          text: 'Music',
          handler: () => {
            this.feeds = this.noFilter.filter((item) => item.data.subreddit.toLowerCase() === "music");
            this.hasFilter = true;
          }
        },
        {
          text: 'Movies',
          handler: () => {
            this.feeds = this.noFilter.filter((item) => item.data.subreddit.toLowerCase() === "movies");
            this.hasFilter = true;
          }
        },
        {
          text: 'Games',
          handler: () => {
            this.feeds = this.noFilter.filter((item) => item.data.subreddit.toLowerCase() === "gaming");
            this.hasFilter = true;
          }
        },
        {
          text: 'Pictures',
          handler: () => {
            this.feeds = this.noFilter.filter((item) => item.data.subreddit.toLowerCase() === "pics");
            this.hasFilter = true;
          }
        },
        {
          text: 'Ask Reddit',
          handler: () => {
            this.feeds = this.noFilter.filter((item) => item.data.subreddit.toLowerCase() === "askAnAmerican");
            this.hasFilter = true;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.feeds = this.noFilter;
            this.hasFilter = false;
          }
        }
      ]
    });

    actionSheet.present();

  }
  filterItems() {
    this.hasFilter = false;
    this.feeds = this.noFilter.filter((item) => {
        return item.data.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }
}