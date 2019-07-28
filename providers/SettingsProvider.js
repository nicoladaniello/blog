import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "../components/ErrorMessage";
import SettingsContext from "./SettingsContext";

export const allSettingsQuery = gql`
  query allSettings {
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

const SettingsProvider = ({ children }) => {
  return (
    <Query query={allSettingsQuery}>
      {({ loading, data: { allSettings }, error }) => {
        if (error)
          return <ErrorMessage message={`Error loading settings. ${error}`} />;
        if (loading) return <div>Loading</div>;

        return (
          <SettingsContext.Provider value={allSettings}>
            {children}
          </SettingsContext.Provider>
        );
      }}
    </Query>
  );
};

export default SettingsProvider;
