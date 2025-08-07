import { FC } from 'react';
import EditorLayout from '../../../features/editor/layouts/editor/editor.layout';
import AnimatedOutlet from '../../../shared/animations/outlet.animation';
import editorOutletAnimationPreset from '../../../features/editor/presets/editor-outlet-animtation.preset';

const EditorRoute: FC = () => {

  return (
    <EditorLayout>
      <AnimatedOutlet animation={editorOutletAnimationPreset} />
    </EditorLayout>
  );
}

export default EditorRoute;
