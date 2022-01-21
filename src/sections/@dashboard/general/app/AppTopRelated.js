import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Card, linkEngine, CardHeader, Typography, Stack } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
// utils
import { fCurrency, fShortenNumber } from '../../../../utils/formatNumber';
// _mock_
// import { _appRelated } from '../../../../_mock';
import _mock from '../../../../_mock';
// components
import Label from '../../../../components/Label';
import Image from '../../../../components/Image';
import Iconify from '../../../../components/Iconify';
import Scrollbar from '../../../../components/Scrollbar';

// ----------------------------------------------------------------------
const githubLinkLogo = 'https://votuenam.github.io/image-hosting/logoDetail/';
const engineDetail = [
  {
    Engine: '0xSI_f33d',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://seguranca-informatica.pt/',
  },
  {
    Engine: 'Abusix',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://abusix.com/',
  },
  {
    Engine: 'Acronis',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.acronis.com/',
  },
  {
    Engine: 'ADMINUSLabs',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.adminuslabs.net/',
  },
  {
    Engine: 'AICC (MONITORAPP)',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://aicc.monitorapp.com/',
  },
  {
    Engine: 'AlienVault',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://cybersecurity.att.com/',
  },
  {
    Engine: 'Antiy-AVL',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://cybersecurity.att.com/',
  },
  {
    Engine: 'Alexa',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.alexa.com/',
  },
  {
    Engine: 'alphaMountain.ai',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://alphamountain.ai/',
  },
  {
    Engine: 'armis',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.armis.com/',
  },
  {
    Engine: 'Artists Against 419',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'http://wiki.aa419.org/',
  },
  {
    Engine: 'AutoShun',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://riskanalytics.com/ra-labs/autoshun-org/',
  },
  {
    Engine: 'Avira Checkurl',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.avira.com/',
  },
  {
    Engine: 'BADWARE.INFO',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'http://ww38.badware.info/',
  },
  {
    Engine: 'Baidu-International',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.baidu.com/',
  },
  {
    Engine: 'benkow.cc',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://benkow.cc/',
  },
  {
    Engine: 'Bfore.Ai PreCrime',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://bfore.ai/',
  },
  {
    Engine: 'BitDefender',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.bitdefender.com/',
  },
  {
    Engine: 'BlockList',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://riskanalytics.com/community/',
  },
  {
    Engine: 'Blueliv',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.blueliv.com/',
  },
  {
    Engine: 'Certego',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.certego.net/',
  },
  {
    Engine: 'Chong Lua Dao',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://chongluadao.vn/',
  },
  {
    Engine: 'CINS Army',
    link: 'http://cinsscore.com/',
  },
  {
    Engine: 'CMC Threat Intelligence',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://cmccybersecurity.com/en/dich-vu-threat-intelligence/',
  },
  {
    Engine: 'Comodo Valkyrie Verdict',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://verdict.valkyrie.comodo.com/',
  },
  {
    Engine: 'CRDF',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.crdf.fr/',
  },
  {
    Engine: 'CyberCrime',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'http://cybercrime-tracker.net/',
  },
  {
    Engine: 'CyRadar',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://cyradar.com/',
  },
  {
    Engine: 'Cyren',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.cyren.com/',
  },
  {
    Engine: 'desenmascara.me',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'http://desenmascara.me/',
  },
  {
    Engine: 'DNS8',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.layer8.pt/',
  },
  {
    Engine: 'Dr.Web',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://vms.drweb.com/online/?lng=en',
  },
  {
    Engine: 'EmergingThreats',
    link: 'https://rules.emergingthreats.net/',
  },
  {
    Engine: 'Emsisoft',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.emsisoft.com/',
  },
  {
    Engine: 'EonScope',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.eonscope.com/',
  },
  {
    Engine: 'ESET',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.eset.com/',
  },
  {
    Engine: 'Feodo Tracker',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://feodotracker.abuse.ch/',
  },
  {
    Engine: 'Forcepoint ThreatSeeker',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.forcepoint.com/product/feature/threatseeker-intelligence',
  },
  {
    Engine: 'Fortinet',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'http://www.fortiguard.com/webfiltering/webfiltering.html',
  },
  {
    Engine: 'FraudScore',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://fraudscore.ai/',
  },
  {
    Engine: 'G-Data',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.gdata.de/',
  },
  {
    Engine: 'Google Safebrowsing',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://developers.google.com/safe-browsing/?csw=1',
  },
  {
    Engine: 'GreenSnow',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://greensnow.co/',
  },
  {
    Engine: 'Heimdal Security',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://heimdalsecurity.com/',
  },
  {
    Engine: 'Hoplite Industries',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.hopliteindustries.com/',
  },
  {
    Engine: 'IPsum',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://github.com/stamparm/ipsum',
  },
  {
    Engine: 'K7AntiVirus',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.k7computing.com/',
  },
  {
    Engine: 'Kaspersky',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.kaspersky.com.vn/',
  },
  {
    Engine: 'Lionic',
    logo: function () {
      return githubLinkLogo + this.Engine + '.svg';
    },
    link: 'https://www.lionic.com/',
  },
];

function getLogo(Engine) {
  const logo = engineDetail.find((detail) => detail.Engine === Engine);
  try {
    if (logo) {
      return logo.logo();
    }
  } catch {
    return 'https://votuenam.github.io/image-hosting/logoDetail/VirusTotal.svg';
  }
  return 'https://votuenam.github.io/image-hosting/logoDetail/VirusTotal.svg';
}
function getLink(Engine) {
  const link = engineDetail.find((detail) => detail.Engine === Engine);
  try {
    if (link) {
      return link.link;
    }
  } catch {
    return 'https://support.virustotal.com/hc/en-us/articles/115002146809-Contributors';
  }
  return 'https://support.virustotal.com/hc/en-us/articles/115002146809-Contributors';
}

let _appRelated = [];
export default function AppTopRelated({ props = [] }) {
  console.log(props);
  _appRelated = props.map((appName, index) => ({
    id: _mock.id(index),
    name: Object.keys(appName)[0],
    system: Object.values(appName)[0],
    price: index === 0 || index === 2 || index === 4 ? 0 : _mock.number.price(index),
    linkEngine: getLink(Object.keys(appName)[0]),
    review: 9,
    logo: getLogo(Object.keys(appName)[0]),
  }));

  return (
    <Card>
      <CardHeader title="Detail Result" />
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {_appRelated.map((app) => (
            <ApplicationItem key={app.id} app={app} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}

// ----------------------------------------------------------------------

ApplicationItem.propTypes = {
  app: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    linkEngine: PropTypes.string,
    review: PropTypes.number,
    logo: PropTypes.string,
    system: PropTypes.string,
  }),
};

function ApplicationItem({ app }) {
  const theme = useTheme();
  const { logo, system, price, linkEngine, review, name } = app;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        sx={{
          width: 48,
          height: 48,
          flexShrink: 0,
          display: 'flex',
          borderRadius: 1.5,
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.neutral',
        }}
      >
        <Image src={logo} alt={name} sx={{ width: 28, height: 28 }} />
      </Box>

      <Box sx={{ flexGrow: 1, minWidth: 160 }}>
        <Typography variant="subtitle2">{name}</Typography>
        <Stack direction="row" alignItems="center" sx={{ mt: 0.5, color: 'text.secondary' }}>
          <Iconify
            width={16}
            height={16}
            icon={system === 'Malicious' ? 'ant-design:code-sandbox-outlined' : 'ant-design:code-twotone'}
          />
          <Typography variant="caption" sx={{ ml: 0.5, mr: 1 }}>
            Type:
          </Typography>
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={price === 0 ? 'success' : 'error'}
          >
            {system}
          </Label>
        </Stack>
      </Box>

      <Stack alignItems="flex-end" sx={{ pr: 3 }}>
        <a href={linkEngine} target="_blank" rel="noreferrer">
          <ReadMoreIcon />
        </a>
        <a href={linkEngine} target="_blank" rel="noreferrer">
          <Typography variant="caption" sx={{ mt: 0.5, color: 'text.secondary' }}>
            {'see more'}
          </Typography>
        </a>
      </Stack>
    </Stack>
  );
}
