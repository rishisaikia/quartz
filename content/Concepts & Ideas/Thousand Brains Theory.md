---
type: concept
category:
  - Neuroscience
  - Behavior
  - Biology
related_models:
related_ideas:
---
### Key Insight

One of science's greatest unsolved puzzles is how billions of simple brain cells create intelligence. While we know a lot of _details_ about neurons and brain regions, we don't know the fundamental algorithm that explains how it all works together.

As per the Thousand Brains Theory by Jeff Hawkins, the brain doesn't build one unified model of the world. Instead, it builds **thousands of models simultaneously**, and they vote to reach consensus.

![[Pasted image 20260212124710.png]]

### The Building Blocks

#### 3.1 Cortical Columns: The Brain's Modular Units

Your neocortex (the thinking part of your brain) is organized into approximately **150,000 cortical columns**. Think of them like this:

> The Spaghetti Metaphor: Imagine cutting 150,000 pieces of spaghetti into 2.5mm lengths, standing them upright, and arranging them side-by-side to form a sheet about the size of a dinner napkin. That's your neocortex. Each piece of spaghetti is a cortical column, and _everything you know or could know fits in that sheet_.

![[Pasted image 20260212133600.png]]

**Key Properties:**
- ~1mm² in area
- Spans all 6 cortical layers
- Contains ~100,000 neurons
- Contains many "minicolumns" of neurons that work together

The fact that all cortical columns have the same basic structure suggests they all run the same basic algorithm, whether they're processing touch, vision, sound, or abstract concepts.

#### 3.2 Grid Cells and Reference Frames: How Your Brain Uses Maps

This is where Hawkins made his breakthrough connection. Grid cells were discovered in the entorhinal cortex (part of your hippocampus) and **won the Nobel Prize in 2014**. They work like a GPS system for your brain.

Grid cells fire in a **hexagonal pattern** as an animal moves through space:

![[Pasted image 20260212124824.png]]

When you're at certain locations, specific grid cells fire. Different grid cells have different spacing, allowing your brain to uniquely identify every location.

Hawkins' Radical Proposal Grid cells aren't just in the hippocampus—they exist _throughout the entire neocortex_, in every cortical column. But instead of mapping your body's location in a room, they map the location of sensory features on objects.

> The Breakthrough Idea Each cortical column learns complete 3D models of objects by associating sensory features (what you sense) with locations (where it is on the object). It's like each column builds its own GPS map of every object you encounter.

>[!example] Coffee Mug Example When you touch a coffee mug:
>
>- One finger senses "smooth, curved" at location A on the mug
>
>- Another finger senses "handle" at location B
>
>- Another senses "rim" at location C
>
>- As you move your fingers, the grid cells update: "I'm now at location D... now E..."
>
>- Over time, the column builds a complete 3D map: "The mug is smooth + curved at A, has a handle at B, rim at C"

#### 3.3 Predictive Neurons

The classical textbook diagram of a neuron is fundamentally misleading. Those synapses you see illustrated—the ones that trigger action potentials and make the neuron fire—represent only about 10% of the story. These are the _proximal synapses_, clustered near the cell body, and they're the ones neuroscience has traditionally focused on because they directly control whether a neuron spikes.

But here's what most diagrams don't show: the other 90% of a neuron's synapses lie far from the cell body, distributed along distant dendritic branches. These _distal synapses_ operate under completely different rules. When a signal arrives at a single distal synapse, it has almost no effect on the cell body—the electrical signal simply fades away before reaching the soma. For decades, their function remained mysterious.

![[Pasted image 20260212124903.png]]
##### The Clustering Principle

The key to understanding distal synapses lies in their organization. Unlike proximal synapses, distal synapses are tightly clustered along each dendritic branch. When approximately twenty or so neighboring synapses on the same branch receive input simultaneously, something remarkable happens: they generate a _dendritic spike_—a localized burst of activity that propagates down the dendrite toward the cell body.

This dendritic spike raises the voltage of the cell body, but crucially, not enough to trigger an action potential on its own. Instead, it puts the neuron into what we might call a _predictive state_. The neuron is now primed, standing on the edge of firing, waiting for confirmation.

##### Prediction and Confirmation

Think of it as a two-stage verification system. The distal synapses act as pattern detectors: when they recognize a familiar pattern of activity in other neurons—"I've seen this before"—they generate a dendritic spike that effectively says, "Get ready, our input is probably coming next." The neuron is now in a state of anticipation.

If the prediction is correct and proximal input arrives shortly afterward, the neuron fires slightly sooner than it would have if it weren't primed. This isn't just an interesting quirk—it's a fundamental mechanism for temporal prediction and sequence learning.

##### Competition in Minicolumns

The elegance of this system becomes clear when we zoom out to the minicolumn level. Within each minicolumn, multiple neurons respond to the same input pattern. When their preferred input arrives, under normal circumstances they would all want to spike.

But here's where prediction creates efficiency: if one or more neurons are already in the predictive state (primed by their distal synapses), only those primed neurons fire. The others are actively inhibited. It's a winner-takes-all competition, where neurons that successfully predicted the input get to fire, while unprepared neurons are silenced.

The result is a beautiful encoding scheme:

- **Predicted inputs** → Sparse, efficient firing (only primed neurons)
- **Unexpected inputs** → Broad, diffuse firing (many neurons)

This explains a well-known observation about the neocortex: unexpected stimuli cause significantly more neural activity than expected ones. It's not a bug—it's the brain's built-in anomaly detection system.

##### The Power of Scale

With thousands of distal synapses per neuron, each cell can recognize hundreds of distinct patterns that predict when it should become active. A single neuron becomes a sophisticated pattern recognition and prediction machine.

Now scale this up: several thousand neurons arranged in minicolumns, interconnected with each other, plus a small population of inhibitory neurons to mediate the competition. What emerges is a system that can learn complex temporal sequences without getting confused—even when those sequences contain repeated sub-sequences that would trip up simpler learning mechanisms.

Each neuron learns: "When I see pattern A, B usually follows." When pattern B arrives as predicted, only the neurons that anticipated it fire. When something unexpected happens, the broad firing pattern signals: "Update your models—something new is happening here."

This is how the neocortex implements prediction at the cellular level—not through some abstract algorithm, but through the precise choreography of proximal activation and distal anticipation, repeated across millions of neurons.
##### How Prediction Works

1. **Pattern Recognition:** Distal synapses recognize patterns in other neurons' activity
2. **Prediction:** When ~20 neighboring distal synapses activate simultaneously, they create a dendritic spike that "primes" the neuron
3. **Confirmation:** If proximal input arrives soon after (confirming the prediction), the neuron spikes a bit sooner
4. **Minicolumn Competition:** In each minicolumn, multiple neurons respond to the same input, but only predicted neurons spike—unexpected inputs cause more neurons to fire

> The Elegant Result Expected inputs cause sparse, efficient firing (only predicted neurons). Unexpected inputs cause broader firing (more neurons), creating a natural anomaly detection system.

### Putting It All Together: The Thousand Brains

Each cortical column independently:

1. Uses grid cells to track location on an object
2. Associates sensory features with those locations
3. Uses predictive neurons to anticipate what comes next
4. Builds a complete 3D model of objects

#### The Voting System

![[Pasted image 20260212124942.png]]

Different cortical columns receive input from different sensors (different fingers, different patches of retina). Each builds its own model and they communicate to reach consensus on what object they're sensing.

#### Why Multiple Models?

- **Robustness:** If one model is confused, others can correct it
- **Speed:** Parallel processing is much faster
- **Partial Information:** You can recognize objects from incomplete data (seeing just the handle identifies it as a mug)
- **Sensor Fusion:** Touch and vision can work together seamlessly because they're building compatible location-based models

### HTM: The Computational Framework

To test these ideas, Hawkins and his team at Numenta created **Hierarchical Temporal Memory (HTM)**—a computational implementation of these brain principles. The key components are:

**Sparse Distributed Representations (SDRs)**

- Like the brain (where only ~2% of neurons are active at once)
- HTM uses sparse binary patterns
- Example: Out of 2048 bits, only 40 are "on"
- Highly robust to noise and damage

**Spatial Pooler**

- Converts inputs into sparse representations
- Mimics how cortical columns encode information
- Learns which patterns to represent

**Temporal Memory**

- Learns and predicts sequences
- Uses the proximal/distal synapse mechanism
- Each cell can represent the same input in different contexts

**Continuous Learning**

- Like the brain, HTM learns constantly from streaming data
- No separate training/inference phases
- Adapts to changing patterns

HTM excels at the following:

✅ Anomaly detection in streaming data 
✅ Time-series prediction 
✅ Pattern recognition with noise and variations 
✅ Learning from limited data 
✅ Explaining its predictions (unlike black-box deep learning)

The current limitations of HTM are:

⚠️ Hasn't matched deep learning's scale on many tasks 
⚠️ Computationally intensive for very large problems 
⚠️ Still being refined and developed

### The Old Brain vs. New Brain

Hawkins emphasizes that the neocortex (new brain) doesn't work alone. It sits on top of the "old brain":

![[Pasted image 20260212125027.png]]

> [!warning] The Conflict The old brain can override the new brain, causing us to act in ways we "know" we shouldn't. False beliefs combined with primitive emotions can be particularly dangerous for humanity's long-term survival.

**Examples of Old Brain Override:**

- Eating junk food despite knowing it's unhealthy
- Reacting with anger despite knowing it's counterproductive
- Tribal/group thinking overriding rational analysis
- Short-term pleasure seeking vs. long-term planning


### Implications of this Model

#### For Understanding the Brain

**Consciousness**

- May emerge from thousands of models voting and reaching consensus
- The "unified" experience is actually an agreement among many independent models
- When models disagree, you feel confusion or uncertainty

**Sense of Self**

- Your brain has models of your body
- It builds a reference frame around "you"
- Self-awareness is your brain modeling itself

**High-Level Thought**

- Abstract concepts are still learned using location-based frameworks
- Mathematical concepts have "locations" in conceptual space
- Language follows the same cortical algorithm as vision or touch

**Why We're Fooled**

- When models agree on something false, that becomes your reality
- You can't easily distinguish false beliefs from true ones
- Confirmation bias: models reinforce each other

#### For Artificial Intelligence

**Architecture Implications:**

- True AI might need thousands of parallel models, not one big neural network
- AI should use location-based reference frames, not just pattern matching
- Continuous learning without catastrophic forgetting becomes possible
- More interpretable AI (we can see which models voted for what)

**What's Different from Deep Learning:**

|Deep Learning|Thousand Brains/HTM|
|---|---|
|One large network|Thousands of parallel modules|
|Pattern matching|Location-based understanding|
|Training vs. inference|Continuous learning|
|Black box|Interpretable|
|Needs huge datasets|Learns from streaming data|
|Forgets when retrained|Maintains knowledge|

**Why This Matters:**

- Current AI doesn't truly "understand" the world—it pattern matches
- HTM-based AI could build genuine world models
- Could lead to AGI (Artificial General Intelligence)
- More robust and explainable systems

#### For Humanity

**Understanding False Beliefs**

- How conspiracy theories form (models agreeing on false patterns)
- Why intelligent people believe false things
- The danger of echo chambers (reinforcing wrong models)

**The Intelligent Species Problem**

- We're transitioning from purely biological to intelligent species
- Our old brain's tribal instincts threaten our survival
- False beliefs + primitive emotions = existential risk
- We need to recognize and manage this conflict

**Education and Learning**

- Learning is about building reference frames
- Understanding requires connecting to existing models
- Rote memorization without understanding fails to build proper models

### Current Status

> [!check] What's Established
> 
> - ✅ The neuroscience foundations are well-established (grid cells, dendritic computation)
> - ✅ HTM successfully demonstrates many principles computationally
> - ✅ Neuroscientists take the theory seriously and find it thought-provoking
> - ✅ Grid cells in the entorhinal cortex are proven (Nobel Prize 2014)
> - ✅ Dendritic computation and distal synapses are well-documented

> [!question] What Needs Validation
> 
> - ⚠️ The full Thousand Brains Theory needs more experimental validation
> - ⚠️ Grid cells throughout the neocortex are hypothesized but not fully proven
> - ⚠️ HTM hasn't yet matched deep learning's scale or performance on many tasks
> - ⚠️ The exact voting mechanism between columns needs more evidence

> [!info] Active Research
> 
> - 🔬 Numenta continues research and development
> - 🔬 Academic neuroscientists are testing predictions
> - 🔬 HTM applications in industry (anomaly detection, prediction)
> - 🔬 Integration with modern deep learning approaches being explored

### Summary: The Core Ideas

1. **Your brain contains ~150,000 cortical columns, all running the same algorithm**
    
    - Each column is a complete learning machine
    - The same mechanism processes everything from touch to abstract thought
2. **Each column uses grid cell-like mechanisms to build location-based models of objects**
    
    - Sensory features are associated with locations
    - This creates 3D mental models
3. **Neurons use distal synapses (90%) for prediction and proximal synapses (10%) for activation**
    
    - Distal synapses recognize patterns and create predictions
    - Proximal synapses confirm predictions
    - This creates efficient, sparse coding
4. **The brain builds thousands of models simultaneously and they vote for consensus**
    
    - Parallel processing for speed and robustness
    - Agreement creates certainty
    - Disagreement creates confusion
5. **This explains how we perceive, predict, learn, and understand the world**
    
    - Perception is model-based prediction
    - Surprise is when predictions fail
    - Learning is updating models
6. **The same principles could lead to better AI that truly understands rather than just pattern-matches**
    
    - Location-based learning
    - Continuous adaptation
    - Genuine world models

### Key Differences from Other Theories
#### vs. Predictive Coding

- **Similar:** Both emphasize prediction
- **Different:** Thousand Brains uses location-based reference frames and parallel models
#### vs. Deep Learning

- **Similar:** Both use distributed representations
- **Different:** Thousand Brains uses sparse codes, continuous learning, and parallel modules

#### vs. Bayesian Brain Hypothesis

- **Similar:** Both involve probabilistic inference
- **Different:** Thousand Brains specifies the neural mechanism (grid cells, voting columns)

#### vs. Global Workspace Theory

- **Similar:** Both address consciousness and information integration
- **Different:** Thousand Brains proposes voting mechanisms rather than a global workspace

### Further Reading

**Books**
- **"A Thousand Brains: A New Theory of Intelligence"** by Jeff Hawkins (2021)
    - The definitive popular explanation of the theory
    - Accessible to general readers
- **"On Intelligence"** by Jeff Hawkins (2004)
    - Earlier work on hierarchical temporal memory
    - Still relevant for understanding the foundations

**Academic Papers**
- **"A Framework for Intelligence and Cortical Function Based on Grid Cells in the Neocortex"** (2019)
    - The key scientific paper proposing grid cells throughout cortex
- **"Why Neurons Have Thousands of Synapses, a Theory of Sequence Memory in Neocortex"** (2016)
    - Explains the distal synapse prediction mechanism

**Online Resources**
- **Numenta Research Papers:** https://numenta.com/research-publications/
- **HTM School Videos:** Video explanations of HTM concepts
- **Numenta GitHub:** Open-source HTM implementations

---

