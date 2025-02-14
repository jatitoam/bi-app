/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { makeAutoObservable } from 'mobx';

class BehaviorOverviewViewModel {
  behaviorStore = null;

  constructor(behaviorStore) {
    makeAutoObservable(this);
    this.behaviorStore = behaviorStore;
  }
}

export default BehaviorOverviewViewModel;
