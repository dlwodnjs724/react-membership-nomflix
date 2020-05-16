import React from 'react';
import TVPresenter from './TVPresenter';

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    erorr: null,
  };

  render() {
    const { nowPlaying, upcoming, popular, loading, error } = this.state;
    return (
      <TVPresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
