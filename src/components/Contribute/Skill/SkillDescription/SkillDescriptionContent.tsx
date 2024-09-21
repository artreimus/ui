import React from 'react';
import { Button } from '@patternfly/react-core/dist/dynamic/components/Button';
import { ExternalLinkAltIcon } from '@patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon';

const SkillDescription: React.FunctionComponent = () => {
  return (
    <div>
      <p>Skills in InstructLab come in two main types:</p>
      <p>
        1) Compositional Skills - These are skills that are performative and you are teaching the model how to do tasks like &quot;write me a
        song&quot; or &quot;summarize an email&quot;.
      </p>
      <p>2) Core Skills - Core skills are foundational like math, reasoning and coding.</p>
      <div>
        <a href="https://github.com/instructlab/taxonomy/blob/main/docs/SKILLS_GUIDE.md" target="_blank">
          <Button variant="plain" aria-label="Learn more about what Skills are in InstructLab">
            Learn More
            <ExternalLinkAltIcon style={{ padding: '3px' }}></ExternalLinkAltIcon>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default SkillDescription;
