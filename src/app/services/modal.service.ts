import { Injectable } from '@angular/core';

interface iModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: iModal[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((item) => {
      return item.id !== id;
    });
  }

  isModalOpen(id: string): boolean | undefined {
    return !!this.modals.find((element) => element.id === id)?.visible;
  }

  toggleModal(id: string) {
    const modal = this.modals.find((element) => element.id === id);

    if (modal) {
      modal.visible = !modal.visible;
    }
    // this.visible = !this.visible;
  }
}
