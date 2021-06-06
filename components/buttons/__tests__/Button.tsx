/**
 * @format
 */

import 'react-native';
import React from 'react';
import Button from '../Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {TouchableOpacity, Text} from 'react-native';

describe('Button component tests', () => {
  it('renders correctly', () => {
    renderer.create(<Button onPress={() => {}}>Hi</Button>);
  });
  it('Can handle default props', () => {
    const instance = renderer.create(
      <Button onPress={() => {}}>Hi</Button>,
    ).root;

    expect(instance?.props).toEqual(
      expect.objectContaining({
        children: 'Hi',
        disabled: false,
        variant: 'primary',
      }),
    );
  });
  it('Can style primary correctly', () => {
    const instance = renderer.create(
      <Button onPress={() => {}} variant="primary">
        Primary
      </Button>,
    ).root;

    const buttonWrapper = instance.findByType(TouchableOpacity);

    const text = instance.findByType(Text);

    expect(buttonWrapper?.props).toEqual(
      expect.objectContaining({
        disabled: false,
        variant: 'primary',
      }),
    );

    expect(buttonWrapper?.props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 2,
        backgroundColor: '#ffffff',
      }),
    );

    expect(text?.props).toEqual(
      expect.objectContaining({
        large: true,
        color: 'black',
        children: 'Primary',
      }),
    );
    expect(text?.props.style[0]).toEqual(
      expect.objectContaining({
        color: 'black',
        fontSize: 16,
      }),
    );
  });
  it('Can style secondary correctly', () => {
    const instance = renderer.create(
      <Button onPress={() => {}} variant="secondary">
        Secondary
      </Button>,
    ).root;

    const buttonWrapper = instance.findByType(TouchableOpacity);

    const text = instance.findByType(Text);

    expect(buttonWrapper?.props).toEqual(
      expect.objectContaining({
        disabled: false,
        variant: 'secondary',
      }),
    );

    expect(buttonWrapper?.props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 2,
        backgroundColor: '#76c3d6b3',
      }),
    );

    expect(text?.props).toEqual(
      expect.objectContaining({
        large: true,
        color: 'black',
        children: 'Secondary',
      }),
    );
    expect(text?.props.style[0]).toEqual(
      expect.objectContaining({
        color: 'black',
        fontSize: 16,
      }),
    );
  });
  it('Can style disabled correctly', () => {
    const instance = renderer.create(
      <Button onPress={() => {}} variant="secondary" disabled>
        Secondary
      </Button>,
    ).root;

    const buttonWrapper = instance.findByType(TouchableOpacity);

    const text = instance.findByType(Text);

    expect(buttonWrapper?.props).toEqual(
      expect.objectContaining({
        disabled: true,
        variant: 'secondary',
      }),
    );

    expect(buttonWrapper?.props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 0,
        backgroundColor: '#b0b0b0',
      }),
    );

    expect(text?.props).toEqual(
      expect.objectContaining({
        large: true,
        color: 'white',
        children: 'Secondary',
      }),
    );
    expect(text?.props.style[0]).toEqual(
      expect.objectContaining({
        color: 'white',
        fontSize: 16,
      }),
    );
  });
});
