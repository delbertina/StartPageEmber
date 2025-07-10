import Component from '@glimmer/component';
import type { ButtonListObject } from 'types';

export interface MainSignature {
  // The arguments accepted by the component
  Args: unknown;
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class Main extends Component<MainSignature> {
  buttonLists: ButtonListObject[] = [
    {
      title: 'Waste Time',
      items: [
        {
          icon: 'bluesky',
          iconPrefix: 'fab',
          text: 'BlueSky',
          link: 'https://bsky.app',
        },
        {
          icon: 'reddit-alien',
          iconPrefix: 'fab',
          text: 'Reddit',
          link: 'https://www.reddit.com',
        },
        {
          icon: 'youtube',
          iconPrefix: 'fab',
          text: 'YouTube',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
      ],
      listClasses: 'button-list-1',
    },
    {
      title: 'Be Productive',
      items: [
        {
          icon: 'crow',
          iconPrefix: 'fas',
          text: 'Duolingo',
          link: 'https://duolingo.com/',
        },
        {
          icon: 'google-drive',
          iconPrefix: 'fab',
          text: 'Google Drive',
          link: 'https://drive.google.com/',
        },
        {
          icon: 'book-open',
          iconPrefix: 'fas',
          text: 'Prolific',
          link: 'https://app.prolific.co/studies',
        },
      ],
      listClasses: 'button-list-2',
    },
    {
      title: 'Stalk Myself',
      items: [
        {
          icon: 'instagram',
          iconPrefix: 'fab',
          text: '@delbertina',
          link: 'https://www.instagram.com/delbertina/reels/',
        },
        {
          icon: 'tiktok',
          iconPrefix: 'fab',
          text: '@delbertina',
          link: 'https://www.tiktok.com/@delbertina',
        },
        {
          icon: 'youtube',
          iconPrefix: 'fab',
          text: '@delbertina',
          link: 'https://www.youtube.com/@delbertina',
        },
        {
          icon: 'facebook',
          iconPrefix: 'fab',
          text: '/delbertina',
          link: 'https://www.facebook.com/delbertina',
        },
        {
          icon: 'youtube',
          iconPrefix: 'fab',
          text: '/DeliSpaceRanger',
          link: 'https://www.youtube.com/user/DeliSpaceRanger',
        },
        {
          icon: 'discord',
          iconPrefix: 'fab',
          text: '@delbertina#5749',
          link: 'https://www.discord.com',
        },
        {
          icon: 'steam',
          iconPrefix: 'fab',
          text: '/delbertina',
          link: 'https://steamcommunity.com/id/delbertina/',
        },
        {
          icon: 'twitch',
          iconPrefix: 'fab',
          text: '@DeliSpaceRanger',
          link: 'https://www.twitch.tv/delispaceranger',
        },
        {
          icon: 'twitch',
          iconPrefix: 'fab',
          text: '@delbertina',
          link: 'https://www.twitch.tv/delbertina',
        },
        {
          icon: 'xbox',
          iconPrefix: 'fab',
          text: 'delbertina',
          link: 'https://www.xbox.com/en-US/',
        },
        {
          icon: 'github',
          iconPrefix: 'fab',
          text: '@delbertina',
          link: 'https://github.com/delbertina',
        },
        {
          icon: 'snapchat',
          iconPrefix: 'fab',
          text: '@delbertina',
          link: 'https://snapchat.com/add/delbertina',
        },
        {
          icon: 'soundcloud',
          iconPrefix: 'fab',
          text: '@delbertina',
          link: 'https://soundcloud.com/delbertina',
        },
        {
          icon: 'bluesky',
          iconPrefix: 'fab',
          text: '@delbertina',
          link: 'https://bsky.app/profile/delbertina.bsky.social',
        },
        {
          icon: 'twitter',
          iconPrefix: 'fab',
          text: '@DeliSpaceRanger',
          link: 'https://twitter.com/delispaceranger',
        },
        {
          icon: 'user-group',
          iconPrefix: 'fas',
          text: 'MagnaRisa',
          link: 'https://magnarisa.net/',
        },
      ],
      listClasses: 'button-list-3',
    },
    {
      title: 'Stalk Myself IRL',
      items: [
        {
          icon: 'instagram',
          iconPrefix: 'fab',
          text: '@delbertinairl',
          link: 'https://www.instagram.com/delbertinairl/reels/',
        },
        {
          icon: 'tiktok',
          iconPrefix: 'fab',
          text: '@delbertinairl',
          link: 'https://www.tiktok.com/@delbertinairl',
        },
        {
          icon: 'youtube',
          iconPrefix: 'fab',
          text: '@delbertinairl',
          link: 'https://www.youtube.com/@delbertinairl',
        },
        {
          icon: 'facebook',
          iconPrefix: 'fab',
          text: '/delbertinairl',
          link: 'https://www.facebook.com/delbertinairl',
        },
      ],
      listClasses: 'button-list-3',
    },
  ];
}
