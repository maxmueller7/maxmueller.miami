# About me.

Hi, I'm Max. I hope you enjoyed my site. Let's get a few things out of the way first:

1.  This is my site's readme, I will write silly things like this list. 😵‍💫
2.  I'm a Full-Stack Software Engineer and love building software.
3.  I have a cat. He occasionally tries to write code by jumping on the keyboard, but his PR's always get declined. 😥
4.  You can contact me at [hello@maxmueller.miami](mailto:hello@maxmueller.miami).
5.  Flags are cool, so if Vexillology peaked your interest, look into joining [NAVA](https://www.nava.org).
6.  Fun fact: I hold 3 citizenships: 🇦🇷🇺🇸🇵🇱
7.  My favorite flag is [Zaire's Flag](https://www.crwflags.com/fotw/images/c/cd-zaire.gif)

# About you.

You're looking at my site because you're a flag lover, and possibly a technical recruiter. Hence, I tried to integrate a bit of modern engineering practices with TypeScript + React for you to see. All my code is available in this same github repo.

# About my website.

I bootstrapped this TypeScript app with [Create React App](https://create-react-app.dev/). I'm using [Theme-UI](https://theme-ui.com/) for theming, and [this site](https://www.countryflags.io/) for the flag icons.

# Changelog.

I'll be versioning my site based on flags.

### v1.0.0 Zaire:

The first version will be named after the flag that got me started into Vexillology.

- Init dev and deployment of site.
- Themed with Theme-UI, themes are:
  - Argentina, Bahamas, China, India, Israel, Italy, Jamaica, Japan, Qatar, South Africa, Uganda, Ukraine, and United States.
- Use i18n to translate 'Hello' into multiple languages.
- Use <span>countryflags.io</span> for flag icons.
- Small chart with stats about flags using Ag-grid.
- My picture, resume, and LinkedIn profile.

# Planned Releases (List is always WIP).

### v2.0.0 Isle of Portland (Jan 2022)

Named after Edgar F. Codd's place of birth because this release deals with a lot of database stuff.

- Add themes for places I've traveled to and change my picture to a picture of me in that place.
- Create database (i.e. Firebase).

  - COUNTRY_NAME (string)
  - ISO_CODE (string) (KEY, also is flag id)
  - CONTINENT (string)
  - FLAG_COLOR_1 (string)
  - FLAG_COLOR_2 (nullable string)
  - FLAG_COLOR_3 (nullable string)
  - FLAG_COLOR_4 (nullable string)
  - FLAG_COLOR_5 (nullable string)
  - TRIBAND (boolean)
  - QUARTERED (boolean)
  - STRIPES (boolean)
  - CANTON (boolean)
  - CIRCLE (boolean)
  - CRESCENT (boolean)
  - CROSS (boolean)
  - DIAMOND (boolean)
  - STARS (boolean)
  - SUN (boolean)
  - TRIANGLE (boolean)
  - ANIMAL (boolean)
  - PLANT (boolean)
  - OBJECT (boolean)
  - INSCRIPTION (boolean)

- Create API for various calls.
- Integrate either Ag-charts or Chartsjs to show data.
