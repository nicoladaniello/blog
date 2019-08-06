import { graphql } from "react-apollo";
import gql from "graphql-tag";

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

const withSettings = graphql(getSettings);
export default withSettings;
