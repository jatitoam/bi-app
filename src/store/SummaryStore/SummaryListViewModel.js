/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { notify } from 'components/Toast';
import PAGE_STATUS from 'constants/PageStatus';
import { makeAutoObservable } from 'mobx';
import moment from 'moment';

class SummaryListViewModel {
  summaryStore = null;
  status = PAGE_STATUS.READY;
  data = [];
  dateFilter = {
    date_start: moment().startOf('month').format('YYYY-MM-DD'),
    date_end: moment().endOf('day').format('YYYY-MM-DD'),
  };
  summaryIdsSelected = null;
  constructor(summaryStore) {
    makeAutoObservable(this);
    this.summaryStore = summaryStore;
  }

  getSummary = (dataFilter, dateFilter) => {
    this.status = PAGE_STATUS.LOADING;
    this.dataFilter = { ...this.dataFilter, ...dataFilter };
    this.dateFilter = { ...this.dateFilter, ...dateFilter };
    this.summaryStore.getSummary(
      this.dataFilter,
      this.dateFilter,
      this.callbackOnDataSuccessHandler,
      this.callbackOnErrorHandler
    );
  };

  handleFilter = (dataFilter) => {
    this.status = PAGE_STATUS.LOADING;
    this.dataFilter = { ...this.dataFilter, ...dataFilter };

    this.summaryStore.getSummary(
      this.dataFilter,
      this.dateFilter,
      this.callbackOnDataSuccessHandler,
      this.callbackOnErrorHandler
    );
  };
  handleFilterDateRange = (startDate, endDate) => {
    this.status = PAGE_STATUS.LOADING;
    let dateRangeFilter = {
      date_start: moment(startDate).format('YYYY-MM-DD'),
      date_end: moment(endDate).endOf('day').format('YYYY-MM-DD'),
    };
    this.dateFilter = { ...this.dateFilter, ...dateRangeFilter };

    this.summaryStore.getSummary(
      this.dataFilter,
      this.dateFilter,
      this.callbackOnDataSuccessHandler,
      this.callbackOnErrorHandler
    );
  };
  resetObservableProperties = () => {};

  callbackOnErrorHandler = (error) => {
    this.status = PAGE_STATUS.READY;
    notify(error.message, 'error');
  };

  callbackOnDataSuccessHandler = (data) => {
    if (data) {
      this.status = PAGE_STATUS.READY;
      this.data = data;
    } else {
      this.status = PAGE_STATUS.ERROR;
      this.data = [];
    }
  };
}

export default SummaryListViewModel;
