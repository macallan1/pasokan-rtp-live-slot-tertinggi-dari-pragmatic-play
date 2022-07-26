'use babel';

import PasokanRtpLiveSlotTertinggiDariPragmaticPlayView from './pasokan-rtp-live-slot-tertinggi-dari-pragmatic-play-view';
import { CompositeDisposable } from 'atom';

export default {

  pasokanRtpLiveSlotTertinggiDariPragmaticPlayView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.pasokanRtpLiveSlotTertinggiDariPragmaticPlayView = new PasokanRtpLiveSlotTertinggiDariPragmaticPlayView(state.pasokanRtpLiveSlotTertinggiDariPragmaticPlayViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.pasokanRtpLiveSlotTertinggiDariPragmaticPlayView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'pasokan-rtp-live-slot-tertinggi-dari-pragmatic-play:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.pasokanRtpLiveSlotTertinggiDariPragmaticPlayView.destroy();
  },

  serialize() {
    return {
      pasokanRtpLiveSlotTertinggiDariPragmaticPlayViewState: this.pasokanRtpLiveSlotTertinggiDariPragmaticPlayView.serialize()
    };
  },

  toggle() {
    console.log('PasokanRtpLiveSlotTertinggiDariPragmaticPlay was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
