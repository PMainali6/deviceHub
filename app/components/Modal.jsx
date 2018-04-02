import React, { Component } from 'react';

import style from '../css/components/modal';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

class Modal extends Component {
	constructor() {
		super();
		this.closeModal = this.closeModal.bind(this);
	}

	closeModal(event) {
		const modal = document.getElementById('modal');

		if(event.target == modal)
			this.props.closeModal();
	}

	render() {
		const { open, closeModal } = this.props;

		return (
			<div id="modal" className={open? cx('modal') : cx('modal','close')} onClick={this.closeModal} >
				{this.props.children}
			</div>
		)
	}
}

export default Modal;