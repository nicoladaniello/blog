import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { compose } from "recompose";
import renderWhenLoading from "./renderWhenLoading";
import renderWhenError from "./renderWhenError";

export const getSettings = gql`
  query getSettings {
    allSettings {
      discussionSettingsDefaultCommentStatus
      discussionSettingsDefaultPingStatus
      generalSettingsDateFormat
      generalSettingsDescription
      generalSettingsLanguage
      generalSettingsStartOfWeek
      generalSettingsTimeFormat
      generalSettingsTimezone
      generalSettingsTitle
      generalSettingsUrl
      readingSettingsPostsPerPage
      writingSettingsDefaultCategory
      writingSettingsDefaultPostFormat
      writingSettingsUseSmilies
    }
  }
`;

const withSettings = compose(
  graphql(getSettings, {
    props: ({ data: { allSettings } = {} }) => ({ settings: allSettings })
  }),
  renderWhenLoading(),
  renderWhenError()
);
export default withSettings;
