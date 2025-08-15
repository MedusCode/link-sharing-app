import { FC } from 'react';

import styles from 'pages/editor/profile/profile.page.module.css';
import { profileAnimationPreset, profileSectionHeaderPreset } from 'pages/editor/profile/profile.page.presets';

import AnimatedSlideContainer from '@animations/components/animated-slide-container/animated-slide-container';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { RootState } from '@app/store/types';
import { createProfileEditorSelectors } from '@features/profile-editor/model/selectors';
import { profileEditorActions } from '@features/profile-editor/model/slice';
import ProfileEditor from '@features/profile-editor/profile-editor';
import SectionContainer from '@shared/components/section-container/section-container';
import { IProfile } from '@shared/types/profile.types';

const selectors = createProfileEditorSelectors((s: RootState) => s.profileEditor);
const actions = profileEditorActions;

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectors.selectProfile);

  const patchProfile = (updatedFields: Partial<IProfile>) =>
    dispatch(actions.profilePatched(updatedFields))

  return (
    <AnimatedSlideContainer className={styles.container} animation={profileAnimationPreset}>
      <SectionContainer
        header={{ className: styles.section_header, ...profileSectionHeaderPreset }}
        className={styles.section}
      >
        <ProfileEditor className={styles.editor} profile={profile} patchProfile={patchProfile} />
      </SectionContainer>
    </AnimatedSlideContainer>
  );
}

export default ProfilePage;
