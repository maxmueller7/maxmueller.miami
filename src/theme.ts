export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Josefin Sans", sans-serif',
    heading: '"SJosefin Sans", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [10, 16, 24, 32, 48, 64, 96],
  fontWeights: {
    light: 200,
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  initialColorModeName: 'unitedStates',
  colors: {
    text: '#3c3b6e',
    background: '#fff',
    primary: '#3c3b6e',
    secondary: '#23435',
    muted: '#f6f6f6',
    modes: {
      argentina: {
        text: '#fff',
        background: '#fff',
        primary: '#f6b40e',
        secondary: '#74acdf',
        muted: '#000',
      },
      bahamas: {
        text: '#FFC72C',
        background: '#00778B',
        primary: '#000',
        secondary: '#FFC72C',
        muted: '#f6f6f6',
      },
      china: {
        text: '#q1234',
        background: '#000',
        primary: '#FFC72C',
        secondary: '#f6b40e',
        muted: '#f6f6f6',
      },
      india: {
        text: '#fff',
        background: '#74acdf',
        primary: '#f6b40e',
        secondary: '#f6b40e',
        muted: '#f6f6f6',
      },
      israel: {
        text: '#0038b8',
        background: '#FFFFFF',
        primary: '#0038b8',
        secondary: '#0038b8',
        muted: '#f6f6f6',
      },
      italy: {
        text: '#fff',
        background: '#74acdf',
        primary: '#f6b40e',
        secondary: '#f6b40e',
        muted: '#f6f6f6',
      },
      jamaica: {
        text: '#fff',
        background: '#74acdf',
        primary: '#f6b40e',
        secondary: '#f6b40e',
        muted: '#f6f6f6',
      },
      japan: {
        text: '#fff',
        background: '#74acdf',
        primary: '#f6b40e',
        secondary: '#f6b40e',
        muted: '#f6f6f6',
      },
      mexico: {
        text: '#fff',
        background: '#74acdf',
        primary: '#f6b40e',
        secondary: '#f6b40e',
        muted: '#f6f6f6',
      },
      qatar: {
        text: '#fff',
        background: '#74acdf',
        primary: '#f6b40e',
        secondary: '#f6b40e',
        muted: '#f6f6f6',
      },
      southAfrica: {
        text: '#fff',
        background: '#007749',
        primary: '#E03C31',
        secondary: '#001489',
        muted: '#f6f6f6',
      },
      uganda: {
        text: '#fff',
        background: '#74acdf',
        primary: '#001489',
        secondary: '#001489',
        muted: '#f6f6f6',
      },
      ukraine: {
        text: '#fff',
        background: '#74acdf',
        primary: '#f6b40e',
        secondary: '#f6b40e',
        muted: '#f6f6f6',
      },
    },
  },
  sizes: ['0px', '1rem', '2rem', '3rem', '4rem', '8rem', '10rem'],
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'muted',
      },
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};
