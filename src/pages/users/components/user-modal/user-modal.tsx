import { Modal } from '../../../../components/modal';
import styles from './user-modal.module.scss';
import { useForm } from 'react-hook-form';
import { userSchema } from './user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormRow } from '../form-row';
import { useCreateUserMutation, useEditUserMutation } from '../../../../redux/api';
import type { User } from '../../../../types/user';
import { useUserSelector } from '../../../../redux/selectors';
import { useEffect } from 'react';
type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};

export const UserModal = ({ isOpen, onClose, title = 'Сотрудник' }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const [createUser] = useCreateUserMutation();
  const [editUser] = useEditUserMutation();
  async function onSubmit(data: Omit<User, 'id'>) {
    await (userData.id ? editUser({ id: userData.id, ...data }) : createUser(data));
    onClose();
  }

  const userData = useUserSelector();
  useEffect(() => {
    reset({
      fullName: userData.fullName || '',
      email: userData.email || '',
      phone: userData.phone || '',
      jobType: userData.jobType || '',
    });
  }, [userData, reset]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Полное имя" error={errors.fullName} isOptional={false}>
          <input
            type="text"
            placeholder="Иван Иванов"
            id="fullName"
            {...register('fullName')}
            required
          />
        </FormRow>

        <FormRow label="Email" error={errors.email} isOptional={false}>
          <input
            type="email"
            placeholder="email@example.com"
            id="email"
            {...register('email')}
            required
          />
        </FormRow>

        <FormRow label="Телефон" error={errors.phone} isOptional={false}>
          <input
            type="tel"
            placeholder="+7 900 000 00 00"
            id="phone"
            {...register('phone')}
            required
          />
        </FormRow>

        <FormRow label="Должность" error={errors.jobType} isOptional={false}>
          <input
            type="text"
            placeholder="Frontend разработчик"
            id="jobType"
            {...register('jobType')}
            required
          />
        </FormRow>

        <div className={styles.actions}>
          <button type="button" onClick={onClose} className={styles.cancel}>
            Отмена
          </button>

          <button type="submit" className={styles.submit}>
            {userData.id ? 'Изменить' : 'Создать'}
          </button>
        </div>
      </form>
    </Modal>
  );
};
