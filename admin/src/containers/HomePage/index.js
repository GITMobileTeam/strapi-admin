/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { get, upperFirst } from 'lodash';
import { auth } from 'strapi-helper-plugin';
import PageTitle from '../../components/PageTitle';

import useFetch from './hooks';
import { ALink, Block, Container, LinkWrapper, P, Wave, Separator } from './components';
import BlogPost from './BlogPost';
import SocialLink from './SocialLink';

const FIRST_BLOCK_LINKS = [
  {
    link:
      'https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start.html#_4-create-a-new-content-type',
    contentId: 'app.components.BlockLink.documentation.content',
    titleId: 'app.components.BlockLink.documentation',
  },
  {
    link: 'https://github.com/strapi/foodadvisor',
    contentId: 'app.components.BlockLink.code.content',
    titleId: 'app.components.BlockLink.code',
  },
];

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    link: 'https://github.com/strapi/strapi/',
  },
  {
    name: 'Slack',
    link: 'https://slack.strapi.io/',
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@strapi',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/strapijs',
  },
  {
    name: 'Reddit',
    link: 'https://www.reddit.com/r/Strapi/',
  },
];

const HomePage = ({ global: { plugins }, history: { push } }) => {
  const { error, isLoading, posts } = useFetch();
  const handleClick = e => {
    e.preventDefault();

    push(
      '/plugins/content-type-builder/content-types/plugins::users-permissions.user?modalType=contentType&kind=collectionType&actionType=create&settingType=base&forTarget=contentType&headerId=content-type-builder.modalForm.contentType.header-create&header_icon_isCustom_1=false&header_icon_name_1=contentType&header_label_1=null'
    );
  };
  const hasAlreadyCreatedContentTypes =
    get(plugins, ['content-manager', 'leftMenuSections', '0', 'links'], []).filter(
      contentType => contentType.isDisplayed === true
    ).length > 1;

  const headerId = hasAlreadyCreatedContentTypes
    ? 'HomePage.greetings'
    : 'app.components.HomePage.welcome';
  const username = get(auth.getUserInfo(), 'username', '');
  const linkProps = hasAlreadyCreatedContentTypes
    ? {
        id: 'app.components.HomePage.button.blog',
        href: 'https://blog.strapi.io/',
        onClick: () => {},
        type: 'blog',
        target: '_blank',
      }
    : {
        id: 'app.components.HomePage.create',
        href: '',
        onClick: handleClick,
        type: 'documentation',
      };

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Block>
              

              <FormattedMessage id="HomePage.welcome.congrats.content">
                {content => <h3>COMPANY PROFILE</h3>}
                  </FormattedMessage>
                <FormattedMessage id="HomePage.welcome.congrats.content">
                  {content => <P>
                    A proud member of the AWRostamani Group, SHIFT Car Rental is your all-around solution provider when it comes to leasing a car. We understand every detail and concern about the business and we ensure that we provide personalized and customized top-of-the-line solutions that suit you and your business needs.
                    </P>}
                    </FormattedMessage>
                    <FormattedMessage id="HomePage.welcome.congrats.content">
                      {content => <P>
                    Our sister company Arabian Automobiles gives us the extra competitive edge in the market. They are authorized distributors of Nissan, Infiniti, and Renault for Dubai and the Northern Emirates. Together, we share our assets and expertise to effectively serve your needs. This helps optimizes costs, energy, and effort -- giving you more value for your money and saving for your business.
                    </P>}
                    </FormattedMessage>
                    <FormattedMessage id="HomePage.welcome.congrats.content">
                      {content => <P>
                    Helping us offer world-class service is our keen focus on innovative technology. We are always looking for the most groundbreaking ways to service our clients best. This dedicated web portal, which is connected to our high-speed and state-of-the-art servers, help make communication and collaboration with our valued corporate clients effortless and effective.
                    </P>}
                    </FormattedMessage>
                    <FormattedMessage id="HomePage.welcome.congrats.content">
                      {content => <P>
                    We aim to exceed your expectations here at Shift Car Rental. With our competitive pricing, you get more value-added services that only the best car leasing company can offer.
                    </P>}
                    </FormattedMessage>
                    <FormattedMessage id="HomePage.welcome.congrats.content">
                      {content => <P>
                    Committed to providing our customers with quality car rental and leasing experience, SHIFT offers reliable service guided by our core values of Integrity, Commitment, and Passion.
                    </P>}
                    </FormattedMessage>
                    <FormattedMessage id="HomePage.welcome.congrats.content">
                      {content => <P>
                    SHIFT Car Rental is an ISO company and is the recipient of the SKEA (Sheikh Khalifa Excellence Award) and DQAP (Dubai Quality Appreciation Programme) Award, and is the only car rental company to have won both awards. We owe this success to our latest achievement with you. We hope this will be one of many to come.
                    </P>}
                </FormattedMessage>



            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
